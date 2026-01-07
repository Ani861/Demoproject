import { FaHome, FaShoppingCart, FaUtensils, FaStar, FaCog } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="sidebar p-3">
      <div className="d-flex align-items-center mb-4">
        <div className="me-2 rounded-circle bg-primary" style={{width:28,height:28}}></div>
        <h5 className="mb-0 fw-bold">GOODFOOD</h5>
      </div>

      <ul className="nav flex-column">
        <li className="nav-link active"><FaHome className="me-2" /> Dashboard</li>
        <li className="nav-link"><FaShoppingCart className="me-2" /> Food Order</li>
        <li className="nav-link"><FaUtensils className="me-2" /> Manage Menu</li>
        <li className="nav-link"><FaStar className="me-2" /> Customer Review</li>

        <li className="nav-link mt-4 text-muted"><FaCog className="me-2" /> Settings</li>
      </ul>
    </aside>
  )
}
