import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio Azure Migrate Extension
# Integration Tests for Migration Factory & Assessment Intelligence

client = TestClient(app)

def test_health_check_operational():
    """Verify that the migration gateway is healthy and Azure Migrate is reachable."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["azure_migrate_connected"] is True

def test_discovery_inventory_retrieval():
    """Ensure the platform can list discovered servers and their migration status."""
    response = client.get("/servers")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "app-fin-uks-01" in [s["hostname"] for s in response.json()]

def test_assessment_initiation():
    """Verify that an AI-driven assessment task can be correctly triggered."""
    payload = {
        "server_ids": ["s-01", "s-02"],
        "performance_baseline": "Last7Days"
    }
    response = client.post("/assessment/run", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()
    assert response.json()["status"] == "Calculating-TCO"

def test_wave_creation_workflow():
    """Verify that a new migration wave can be correctly initialized."""
    payload = {
        "name": "Phase 1 - UK Finance",
        "target_date": "2026-09-15T09:00:00Z"
    }
    response = client.post("/waves/create", json=payload)
    assert response.status_code == 201
    assert response.json()["name"] == "Phase 1 - UK Finance"

def test_cutover_logic_execution():
    """Verify the initiation of a wave cutover logic."""
    payload = {
        "wave_id": "w-01",
        "shutdown_source": True
    }
    response = client.post("/cutover/execute", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()

def test_analytics_summary_retrieval():
    """Ensure the platform reports migration velocity and discovered assets."""
    response = client.get("/analytics/summary")
    assert response.status_code == 200
    assert "total_discovered" in response.json()
    assert "current_velocity" in response.json()
