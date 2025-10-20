import BrowserUsage from "@/components/home/BrowserUsage";
import CardList from "@/components/home/CardList";
import TodoList from "@/components/home/TodoList";
import TotalRevenueChart from "@/components/home/TotalRevenueChart";
import TotalVisitors from "@/components/home/TotalVisitors";

export default function Home() {
  const popularContent = [
    {
      id: 1,
      title: "JavaScript Tutorial",
      badge: "Coding",
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 4300,
    },
    {
      id: 2,
      title: "Tech Trends 2025",
      badge: "Tech",
      image:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 3200,
    },
    {
      id: 3,
      title: "The Future of AI",
      badge: "AI",
      image:
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 2400,
    },
    {
      id: 4,
      title: "React Hooks Explained",
      badge: "Coding",
      image:
        "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1500,
    },
    {
      id: 5,
      title: "Image Generation with AI",
      badge: "AI",
      image:
        "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1200,
    },
  ];

  const latestTransactions = [
    {
      id: 1,
      title: "Subscription Renewal",
      badge: "John Doe",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1400,
    },
    {
      id: 2,
      title: "Payment for Services",
      badge: "Jane Smith",
      image:
        "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 2100,
    },
    {
      id: 3,
      title: "Subscription Renewal",
      badge: "Michael Johnson",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1300,
    },
    {
      id: 4,
      title: "Payment for Services",
      badge: "Lily Adams",
      image:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 2500,
    },
    {
      id: 5,
      title: "Subscription Renewal",
      badge: "Sam Brown",
      image:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: 1400,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="home-page-card 2xl:col-span-2">
        <TotalRevenueChart />
      </div>
      <div className="home-page-card">
        <CardList title="Latest Transactions" list={latestTransactions} />
      </div>
      <div className="home-page-card">
        <BrowserUsage />
      </div>
      <div className="home-page-card">
        <TodoList />
      </div>
      <div className="home-page-card 2xl:col-span-2">
        <TotalVisitors />
      </div>
      <div className="home-page-card">
        <CardList title="Popular Content" list={popularContent} />
      </div>
    </div>
  );
}
