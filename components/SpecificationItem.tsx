import React from "react";

const SpecificationItem = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div>{children}</div>;

const Label = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="rlx-body20-bold text-rlx-brown">{children}</div>;

const Value = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="rlx-body20-light text-rlx-black">{children}</div>;

SpecificationItem.Label = Label;
SpecificationItem.Value = Value;

export default SpecificationItem;
