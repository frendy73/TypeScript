const supervisor = new Supervisors("John Doe", "Manager", "1980-01-01", "Sales");
console.log(supervisor.getInfo());
console.log(supervisor.getStatus());
console.log(supervisor.getField());

const worker = new Jobs("Jane Doe", "1990-05-15", "123 Main St", "Engineer", "Development");
console.log(worker.getInfo());
console.log(worker.getStatus());
console.log(worker.getField());

const client = new Clients("Acme Corp", "N/A", "456 Elm St", "New Product Development", "info@acmecorp.com");
console.log(client.getInfo());
console.log(client.getStatus());
console.log(client.getField());