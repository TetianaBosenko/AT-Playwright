import { test } from "../helpers/Fixtures/authenticatedPage";
import { expect } from "@playwright/test";

test.describe("POST /api/cars", () => {
  test("create car successfully", async ({ authenticatedPage }) => {
    const request = authenticatedPage.context().request;
    const response = await request.post("/api/cars", {
      data: { carBrandId: 1, carModelId: 1, mileage: 310 },
    });
    const body = await response.json();
    expect(response.status()).toBe(201);
    expect(body.data.carBrandId).toBe(1);
    expect(body.data.carModelId).toBe(1);
    expect(body.data.mileage).toBe(310);
  });

  test("400 Bad request without carBrandId", async ({ authenticatedPage }) => {
    const request = authenticatedPage.context().request;
    const response = await request.post("/api/cars", {
      data: { carModelId: 1, mileage: 310 },
    });
    const body = await response.json();
    expect(response.status()).toBe(400);
    expect(body.message).toBe("Car brand id is required");
  });

  test("401 User is not logged in", async ({ request }) => {
    const response = await request.post("/api/cars", {
      data: { carBrandId: 1, carModelId: 1, mileage: 310 },
    });
    const body = await response.json();
    expect(response.status()).toBe(401);
    expect(body.message).toBe("Not authenticated");
  });
});
