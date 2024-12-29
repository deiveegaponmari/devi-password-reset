import Card from "../components/Card";

export default function Signup() {
    return (
        <div className="container">
            <Card>
                <div className="mb-3">
                    <label for="firstname" className="form-label">FirstName:</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Enter FirstName Here" />
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">LastName:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Enter LastName Here" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Register</button>
                </div>
            </Card>
        </div>
    )
}