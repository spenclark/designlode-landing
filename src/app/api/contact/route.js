export async function POST(request) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, email, projectDescription, timeline } =
      body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !projectDescription) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // In a production environment, you would:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM

    // For now, we'll just log the contact request
    console.log("New contact request:", {
      companyName,
      contactPerson,
      email,
      projectDescription,
      timeline,
      timestamp: new Date().toISOString(),
    });

    return Response.json(
      { success: true, message: "Contact request received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
