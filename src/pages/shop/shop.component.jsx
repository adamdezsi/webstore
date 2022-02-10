import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

import SHOPDATA from "./shop.data";

import CollectionPreview from "../../components/collection/collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
