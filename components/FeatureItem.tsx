import React from "react";

const FeatureItem = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="rlx-spacing-y">{children}</div>;

const Textblock = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="space-y-[1.25rem]">{children}</div>;

const Title = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="rlx-headline50 text-rlx-brown">{children}</div>;

const Text = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <div className="rlx-body20-light text-rlx-black">{children}</div>;

FeatureItem.Textblock = Textblock;
FeatureItem.Title = Title;
FeatureItem.Text = Text;

export default FeatureItem;
