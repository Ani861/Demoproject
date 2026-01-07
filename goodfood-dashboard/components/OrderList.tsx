import Image from 'next/image'

interface Order {
  id: number
  name: string
  price: number
  image?: string
}

export default function OrderList({ orders }: { orders: Order[] }) {
  return (
    <div className="card shadow-sm p-3">
      <h6>Most Ordered Food</h6>

      <ul className="list-group list-group-flush">
        {orders.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              {item.image && (
                <Image src={item.image} alt={item.name} width={48} height={48} />
              )}
              <div>
                <div>{item.name}</div>
                <small className="text-muted">IDR {item.price}</small>
              </div>
            </div>
            <div>
              <button className="btn btn-outline-primary btn-sm">View</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
