import { Grid, Container, Button } from "@material-ui/core";
import React from "react";
import "./Pricing.css";

const data = [
  {
    txt1: "Propogational",
    txt2: "$500",
    txt3:'Graphic designer',
    txt4:'Web design',
    txt5:'Seo marketing',
    txt6:'Web research'
  },
];

const Pricing = () => {
  return (
    <div style={{paddingTop:'5%'}}>
      <Container>
      <h1 className='price-hd'>
                    Pricing Plans----
                </h1>
        <Grid container>
     
          <Grid item md={1} />
          <Grid item md={3} xs={12} className='center-price'>
            <h3 className="head-price">All Planing set</h3>
            <h6 className="dec-price">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </h6>
          </Grid>
          <Grid item md={1} />
          {data.map((item) => (
            <Grid item md={2} xs={12} sm={12} className="border">
              <h3 className="prop">{item.txt1}</h3>
              <h1 className="price">
                {item.txt2}
                <span style={{ fontSize: 18 }}>Mo-</span>
              </h1>
              <h5 className="gd">{item.txt3}</h5>
              <h5 className="gd">{item.txt4}</h5>
              <h5 className="gd">{item.txt5}</h5>
              <h5 className="gd">{item.txt6}</h5>
              <Button variant='contained' color='primary'>
                  Let's Start
              </Button>
            </Grid>
            
          ))}
           {data.map((item) => (
            <Grid item md={2} xs={12} sm={12} className="border">
                
              <h3 className="prop">{item.txt1}</h3>
              <h1 className="price">
                {item.txt2}
                <span style={{ fontSize: 18 }}>Mo-</span>
              </h1>
              <h5 className="gd">{item.txt3}</h5>
              <h5 className="gd">{item.txt4}</h5>
              <h5 className="gd">{item.txt5}</h5>
              <h5 className="gd">{item.txt6}</h5>
              <Button variant='contained' color='primary'>
                  Let's Start
              </Button>
            </Grid>
            
          ))}
           {data.map((item) => (
            <Grid item md={2} xs={12} sm={12} className="border">
              <h3 className="prop">{item.txt1}</h3>
              <h1 className="price">
                {item.txt2}
                <span style={{ fontSize: 18 }}>Mo-</span>
              </h1>
              <h5 className="gd">{item.txt3}</h5>
              <h5 className="gd">{item.txt4}</h5>
              <h5 className="gd">{item.txt5}</h5>
              <h5 className="gd">{item.txt6}</h5>
              <Button variant='contained' color='primary' >
                  Let's Start
              </Button>
            </Grid>
            
          ))}
          <Grid item md={1}/>
        </Grid>
      </Container>
    </div>
  );
};

export default Pricing;
