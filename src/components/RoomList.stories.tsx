import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { RoomList } from "./RoomList";
import { Providers } from "./Providers";

export default {
  title: "Components/RoomList",
  component: RoomList,
  args: {},
} as Meta<typeof RoomList>;

const Template: StoryFn<typeof RoomList> = (args) => (
  <Providers>
    <RoomList {...args} />
  </Providers>
);

export const Story = Template.bind({});
Story.args = {};
