import Card from "./Card";
import "./base.css";

const Dashboard = () => {
  return (
    <div className="container">
      <Card title="h2 tag">
        <h2>How are you</h2>
      </Card>
      <Card title="image tag">
        <img />
      </Card>
      <Card title="button tag">
        <button>Heello button</button>
      </Card>
    </div>
  );
};

export default Dashboard;
