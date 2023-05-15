
import './App.css';

function App() {

  const data=[
    {
      Option: "Free",
      price: "$0/month",
      l1: "Single User",
      l2: "5GB Storage",
      l3: "Unlimited Public Projects",
      l4: "Community Access"
    },
    {
      Option: "PLUS",
      price: "$9/month",
      l1: "5 Users",
      l2: "50GB Storage",
      l3: "Unlimited Public Projects",
      l4: "Community Access",
      l5: "Dedicated Phone Support",
      l6: "Free Subdomain"
    },
    {
      Option: "PRO",
      price: "$49/month",
      l1: "Unlimited Users",
      l2: "150GB Storage",
      l3: "Unlimited Public Projects",
      l4: "Community Access",
      l5: "Dedicated Phone Support",
      l6: "Unlimited Free Subdomain",
      l7: "Monthly Status Reports"
    }

  ]
  return (
    <div className="App">
     {data.map((objval, indx)=>(
      <Pricecart
      key={indx}
      Option= {objval.Option}
      price= {objval.price}
      l1= {objval.l1}
      l2= {objval.l2}
      l3= {objval.l3}
      l4= {objval.l4}
      l5= {objval.l5}
      l6= {objval.l6}
      l7= {objval.l7}
      />
     ))}
    </div>
  );
}

export default App;

function Pricecart(pros){
return(
<div class="card-body">
  <h1>{pros.Option}</h1>
  <h2>{pros.price}</h2>
  <ul>
  <li>{pros.l1}</li>
  <li>{pros.l2}</li>
  <li>{pros.l3}</li>
  <li>{pros.l4}</li>
  <li>{pros.l5}</li>
  <li>{pros.l6}</li>
  <li>{pros.l7}</li>
  </ul>
  <div class="button">Button </div>
</div>
)
}
