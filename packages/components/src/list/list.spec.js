import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import List from ".";

describe("List", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<List>{"Test"}</List>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
