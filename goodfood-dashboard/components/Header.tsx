import Image from 'next/image'
import { FaBell } from 'react-icons/fa'

interface HeaderProps {
  onSearch: (value: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <input
        type="text"
        className="form-control header-search"
        placeholder="Search food..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="d-flex align-items-center gap-3 header-controls">
        <FaBell className="bell" />
        <div className="badge-dot" />
        <strong>Delicious Burger</strong>
        <Image src="/images/avatar.svg" alt="avatar" width={36} height={36} />
      </div>
    </div>
  )
}
