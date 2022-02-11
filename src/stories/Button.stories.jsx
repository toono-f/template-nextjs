import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "sm",
};

export const Meddium = Template.bind({});
Meddium.args = {
  label: "Button",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "lg",
};
