import { Link } from "react-router-dom";
import React from "react";

import GroupDate from "./GroupDate";
import Card from "../UI/Card";
import "./Group.css";

const Group = (props) => {
  const myShare = props.signedInUser.myShare;
  const amountPaid = props.signedInUser.amountPaid;
  let userDebtStatus;
  if (myShare > amountPaid) {
    userDebtStatus = `You owe Rs ${myShare - amountPaid}`;
  } else if (myShare === amountPaid) {
    userDebtStatus = `Your amount is settled up`;
  } else {
    userDebtStatus = `You are owed Rs ${amountPaid - myShare}`;
  }
  return (
    <li>
      <Link to={`/groups/${props.id}`}>
        <Card className="group">
          <GroupDate date={props.date} />
          <div className="group__description">
            <h2>{`${props.name} (Total transaction amounting to Rs ${props.worth})`}</h2>
            <div className="group__price">{userDebtStatus}</div>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default Group;
