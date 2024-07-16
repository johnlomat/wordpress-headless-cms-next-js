import type { Metadata } from "next";
import { robots } from "@/app/robots-metadata";
import { Section, Row, Col } from "@/components/Layouts";
import ProductCatCard from "@/components/ProductCatCard";
import { WORDPRESS_DOMAIN } from "@/utils/constants";

// Return Seo title and description
export const metadata: Metadata = {
  title: "Rolex Watches | [Retailer Name]",
  description:
    "Browse Rolex watches online at Woo Hing Brothers, an Official Authorised Rolex Retailer of men&#039;&#039;s and ladies Rolex watches.",
  ...robots,
};

const classicWatches = [
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-day-date.jpg`,
    family_name: "Day-Date",
    link: "/rolex-watches/day-date",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-datejust.jpg`,
    family_name: "Datejust",
    link: "/rolex-watches/datejust",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-lady-datejust.jpg`,
    family_name: "Lady-Datejust",
    link: "/rolex-watches/lady-datejust",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-sky-dweller.jpg`,
    family_name: "Sky-Dweller",
    link: "/rolex-watches/sky-dweller",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-oyster-perpetual.jpg`,
    family_name: "Oyster Perpetual",
    link: "/rolex-watches/oyster-perpetual",
  },
];

const professionalWatches = [
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-air-king.jpg`,
    family_name: "Air-King",
    link: "/rolex-watches/air-king",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-gmt-master-II.jpg`,
    family_name: "GMT-Master II",
    link: "/rolex-watches/gmt-master-ii",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-sea-dweller.jpg`,
    family_name: "Sea-Dweller",
    link: "/rolex-watches/sea-dweller",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-submariner.jpg`,
    family_name: "Submariner",
    link: "/rolex-watches/submariner",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-cosmograph-daytona.jpg`,
    family_name: "Cosmograph Daytona",
    link: "/rolex-watches/cosmograph-daytona",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-yacht-master.jpg`,
    family_name: "Yacht-Master",
    link: "/rolex-watches/yacht-master",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-explorer.jpg`,
    family_name: "Explorer",
    link: "/rolex-watches/explorer",
  },
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-deepsea.jpg`,
    family_name: "Deepsea",
    link: "/rolex-watches/deepsea",
  },
];

const perpetualWatch = [
  {
    banner_image: `${WORDPRESS_DOMAIN}/wp-content/uploads/2024/07/rolex-watches-1908.jpg`,
    family_name: "1908",
    link: "/rolex-watches/1908",
  },
];

const RolexWatches = () => {
  return (
    <>
      <Section className="rlx-spacing-y bg-rlx-light-beige">
        <Row className="space-y-[1.25rem]">
          <Col className="w-full">
            <div className="rlx-headline36 text-rlx-brown">
              <h2>Classic watches</h2>
            </div>
          </Col>
          <Col className="grid w-full grid-cols-2 gap-x-[0.5rem] gap-y-[1.875rem] lg:grid-cols-3">
            {classicWatches.map((family, index) => (
              <ProductCatCard key={index}>
                <ProductCatCard.LinkWrapper href={family.link}>
                  <ProductCatCard.ImageWrapper
                    src={family.banner_image}
                    alt={family.family_name}
                    width={810}
                    height={540}
                  />
                  <ProductCatCard.BodyWrapper>
                    <h3>
                      <span className="rlx-legend16-bold block">Rolex</span>{" "}
                      <span className="rlx-body24-bold block">
                        {family.family_name}
                      </span>
                    </h3>
                  </ProductCatCard.BodyWrapper>
                </ProductCatCard.LinkWrapper>
              </ProductCatCard>
            ))}
          </Col>
        </Row>
        <Row className="space-y-[1.25rem]">
          <Col className="w-full">
            <div className="rlx-headline36 text-rlx-brown">
              <h2>Professional watches</h2>
            </div>
          </Col>
          <Col className="grid w-full grid-cols-2 gap-x-[0.5rem] gap-y-[1.875rem] lg:grid-cols-3">
            {professionalWatches.map((family, index) => (
              <ProductCatCard key={index}>
                <ProductCatCard.LinkWrapper href={family.link}>
                  <ProductCatCard.ImageWrapper
                    src={family.banner_image}
                    alt={family.family_name}
                    width={810}
                    height={540}
                  />
                  <ProductCatCard.BodyWrapper>
                    <h3>
                      <span className="rlx-legend16-bold block">Rolex</span>{" "}
                      <span className="rlx-body24-bold block">
                        {family.family_name}
                      </span>
                    </h3>
                  </ProductCatCard.BodyWrapper>
                </ProductCatCard.LinkWrapper>
              </ProductCatCard>
            ))}
          </Col>
        </Row>
        <Row className="space-y-[1.25rem]">
          <Col className="w-full">
            <div className="rlx-headline36 text-rlx-brown">
              <h2>Perpetual</h2>
            </div>
          </Col>
          <Col className="grid w-full grid-cols-2 gap-x-[0.5rem] gap-y-[1.875rem] lg:grid-cols-3">
            {perpetualWatch.map((family, index) => (
              <ProductCatCard key={index}>
                <ProductCatCard.LinkWrapper href={family.link}>
                  <ProductCatCard.ImageWrapper
                    src={family.banner_image}
                    alt={family.family_name}
                    width={810}
                    height={540}
                  />
                  <ProductCatCard.BodyWrapper>
                    <h3>
                      <span className="rlx-legend16-bold block">Rolex</span>{" "}
                      <span className="rlx-body24-bold block">
                        {family.family_name}
                      </span>
                    </h3>
                  </ProductCatCard.BodyWrapper>
                </ProductCatCard.LinkWrapper>
              </ProductCatCard>
            ))}
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default RolexWatches;
