# Devopstrio Azure Migrate Extension
# Core Migration Infrastructure (Terraform)
# Target: Microsoft Azure

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Migration Factory Resource Group
resource "azurerm_resource_group" "migration_factory" {
  name     = "rg-azure-migrate-ext-prd"
  location = "uksouth"
  tags = {
    Platform = "Migration-Factory"
    Source   = "Azure-Migrate-Extension"
  }
}

# 2. Azure Migrate Project & Workflow Context
# Note: Azure Migrate Service represents a complex suite. We define the management plane.

# 3. PostgreSQL for Migration Metadata & Assessment Ledger
resource "azurerm_postgresql_flexible_server" "migrate_db" {
  name                   = "psql-migrate-ext-metadata"
  resource_group_name    = azurerm_resource_group.migration_factory.name
  location               = azurerm_resource_group.migration_factory.location
  version                = "13"
  administrator_login    = "migrate_admin"
  administrator_password = "secure-password-from-kv"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
}

# 4. Storage for Discovery Logs & Assessment Exports
resource "azurerm_storage_account" "migrate_logs" {
  name                     = "stmigrateextlogs"
  resource_group_name      = azurerm_resource_group.migration_factory.name
  location                 = azurerm_resource_group.migration_factory.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# 5. Key Vault for Migration Credentials (vCenter/Hyper-V)
resource "azurerm_key_vault" "migrate_kv" {
  name                = "kv-migrate-ext-secrets"
  location            = azurerm_resource_group.migration_factory.location
  resource_group_name = azurerm_resource_group.migration_factory.name
  tenant_id           = "your-tenant-id"
  sku_name            = "standard"
}

# 6. Log Analytics Workspace for Migration Telemetry
resource "azurerm_log_analytics_workspace" "migrate_law" {
  name                = "law-migrate-ext-uks-01"
  location            = azurerm_resource_group.migration_factory.location
  resource_group_name = azurerm_resource_group.migration_factory.name
  sku                 = "PerGB2018"
}

# Outputs
output "resource_group_name" {
  value = azurerm_resource_group.migration_factory.name
}

output "metadata_db_endpoint" {
  value = azurerm_postgresql_flexible_server.migrate_db.fqdn
}
