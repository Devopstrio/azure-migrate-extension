-- Devopstrio Azure Migrate Extension
-- Core Migration Factory & Orchestration Database Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_subscription_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'MigrationEngineer', -- ProgramManager, MigrationEngineer, Auditor
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Discovery & Infrastructure Inventory
CREATE TABLE IF NOT EXISTS applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    app_tier VARCHAR(50) DEFAULT 'Tier3',
    owner_contact VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS servers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID REFERENCES applications(id),
    hostname VARCHAR(255) NOT NULL,
    ip_address VARCHAR(50),
    os_type VARCHAR(100), -- Windows, Linux, etc.
    cores INT,
    ram_gb INT,
    readiness_status VARCHAR(50) DEFAULT 'InReview', -- Ready, ReadyWithCondition, NotReady
    replication_state VARCHAR(50) DEFAULT 'Initial', -- Starting, Replicating, Healthy, Lagging
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dependencies (
    id BIGSERIAL PRIMARY KEY,
    source_server_id UUID REFERENCES servers(id) ON DELETE CASCADE,
    target_server_id UUID REFERENCES servers(id) ON DELETE CASCADE,
    frequency VARCHAR(20) DEFAULT 'High',
    discovery_method VARCHAR(50) DEFAULT 'Agentless'
);

-- 3. Assessment Intelligence
CREATE TABLE IF NOT EXISTS assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    server_id UUID REFERENCES servers(id),
    recommended_size VARCHAR(50), -- e.g., Standard_D2s_v3
    estimated_monthly_cost FLOAT,
    readiness_blockers TEXT,
    assessment_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Wave Planning
CREATE TABLE IF NOT EXISTS waves (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    target_cutover_date TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50) DEFAULT 'Planning', -- Scoping, Deployment, Readiness, Completed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE servers ADD COLUMN wave_id UUID REFERENCES waves(id);

-- 5. Execution Ledger
CREATE TABLE IF NOT EXISTS cutovers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    wave_id UUID REFERENCES waves(id),
    started_by UUID REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'InProgress', -- Success, Partial, Failed
    log_output TEXT,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP WITH TIME ZONE
);

-- 6. Risks & Audit
CREATE TABLE IF NOT EXISTS risks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    severity VARCHAR(20), -- Critical, High, Medium
    category VARCHAR(100), -- Network, Identity, Legacy
    description TEXT,
    mitigation_plan TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource_id VARCHAR(255),
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Strategic Migration Indexes
CREATE INDEX idx_server_app ON servers(application_id);
CREATE INDEX idx_server_wave ON servers(wave_id);
CREATE INDEX idx_server_status ON servers(readiness_status);
CREATE INDEX idx_assessment_server ON assessments(server_id);
CREATE INDEX idx_audit_time ON audit_logs(created_at);
