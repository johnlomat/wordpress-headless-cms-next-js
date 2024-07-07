const SpecificationItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <div className="rlx-body20-bold text-rlx-brown">{label}</div>
    <div className="rlx-body20-light text-rlx-black">{value}</div>
  </div>
);

export default SpecificationItem;
