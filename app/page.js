import "./page.css";

import Banner from "@/component/home/banner";
import Client from "@/component/home/client";
import System from "@/component/home/system";
import Achievement from "@/component/home/achievement";
import Caring from "@/component/home/caring";
import Demo from "@/component/home/demo";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Home() {
  await getData();

  const banner = "/img/banner1.png";

  const client = [
    "/img/Logo (1).png",
    "/img/Logo (2).png",
    "/img/Logo (3).png",
    "/img/Logo (4).png",
    "/img/Logo (5).png",
    "/img/Logo (6).png",
    "/img/Logo (7).png",
  ];

  const system = [
    {
      id: 1,
      img: "/img/Icon.png",
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation",
    },
    {
      id: 2,
      img: "/img/Icon (1).png",
      title: "National Associations",
      desc: "Our membership management software provides full automation",
    },
  ];

  const achievement = [
    {
      id: 1,
      img: "/img/hel.png",
      number: "2,245,341",
      text: "Members",
    },
    {
      id: 2,
      img: "/img/hel1.png",
      number: "46,328",
      text: "Clubs",
    },
    {
      id: 3,
      img: "/img/hel2.png",
      number: "828,867",
      text: "Event Bookings",
    },
    {
      id: 4,
      img: "/img/hel3.png",
      number: "1,926,436",
      text: "Payments",
    },
  ];

  const blog = [
    {
      id: 1,
      img: "/img/image 18.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      img: "/img/image 19.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      img: "/img/image 20.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <>
      <Banner banner={banner} />
      <Client client={client} />
      <System system={system} />
      <Achievement achievement={achievement} />
      <Caring blog={blog} />
      <Demo />
    </>
  );
}