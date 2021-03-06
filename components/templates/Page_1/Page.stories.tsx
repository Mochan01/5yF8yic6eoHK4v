import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Page_1, PageProps } from "./Page_1";
import * as HeaderStories from "../../molecules/Header/Header.stories";

export default {
  title: "Templates/Page",
  component: Page_1,
} as Meta;

const Template: Story<PageProps> = (args) => <Page_1 {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
