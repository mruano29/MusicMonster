import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Input from ".";

describe("Input", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Input>{"Test"}</Input>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
