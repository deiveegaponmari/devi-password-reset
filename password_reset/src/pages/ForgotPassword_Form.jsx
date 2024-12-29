import Card from "../components/Card";
export default function ForgotPassword_Form(){
    return (
        <div className="container">
            <Card>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input  type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input  type="password" className="form-control" id="password" placeholder="********" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary"  type="button">Update Password</button>
                </div>
            </Card>
        </div>
    )
}