import { Link } from "react-router-dom";
export default function AdminNav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link color='teal.500' to="/users">Users</Link>
      <Link to="/add-jobs">Add Job</Link>
    </div>
  );
}