import Card from "../components/Card";
export default function EmailVerify(){
    return(
        <div className="container">
        <Card>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="d-grid gap-2">
                    <button className="btn btn-primary"  type="button">Verify Email</button>
                </div>
            </Card>
            </div>
    )
}