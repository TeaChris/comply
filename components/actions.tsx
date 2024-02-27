import { Input } from './ui/input'

export function Actions() {
  return (
    <section className="w-full flex items-center justify-between h-10">
      <Input
        className="w-[289px] h-[53px] bg-[#EDEDED] text-lg text-[#a3a3a3]"
        placeholder="Product Search"
      />
      <Input
        className="w-[289px] h-[53px] bg-[#EDEDED] text-lg text-[#a3a3a3]"
        placeholder="Choose Category"
      />
    </section>
  )
}
