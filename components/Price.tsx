const Price = ({ price }: { price: any }) => {
  price = Number(price);

  return (
    <>
      <div className="rlx-body20-light text-rlx-black">
        RM{price.toLocaleString()}
      </div>
    </>
  );
};

export default Price;
