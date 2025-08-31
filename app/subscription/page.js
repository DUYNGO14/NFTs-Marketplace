"use client";
import React from "react";
import Styles from "./Subscription.module.css";

const plans = [
  {
    name: "STARTER",
    price: "$5/mo",
    features: ["Automated Reporting", "Faster Processing", "Customizations"],
    popular: false,
  },
  {
    name: "BASIC",
    price: "$15/mo",
    features: ["Everything in Starter", "100 Builds", "Progress Reports", "Premium Support"],
    popular: true,
  },
  {
    name: "PLUS",
    price: "$25/mo",
    features: ["Everything in Basic", "Unlimited Builds", "Advanced Analytics", "Company Evaluations"],
    popular: false,
  },
];

const SubscriptionPage = () => {
  return (
    <div className={Styles.subscription}>
      <h1>
        Subscription
      </h1>
      <p>Pricing to fit the needs of any company size.</p>

      <div className={Styles.plans}>
        {plans.map((plan, i) => (
          <div key={i} className={Styles.card}>
            <div className={Styles.cardHeader}>
              <h2>{plan.name}</h2>
              {plan.popular && <span className={Styles.popular}>POPULAR</span>}
            </div>
            <h3>{plan.price}</h3>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
            <button className={Styles.button}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
