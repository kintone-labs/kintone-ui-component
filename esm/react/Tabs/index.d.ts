/// <reference types="react" />
import '../../css/font.css';
import '../../css/Tabs.css';
declare type TabsItem = {
    tabName: string;
    tabContent?: any;
    isDisabled?: boolean;
};
declare type TabsProps = {
    items?: TabsItem[];
    value?: number;
    onClickTabItem?: (tabIndex: number) => void;
};
declare const Tabs: ({ items, value, onClickTabItem }: TabsProps) => JSX.Element;
export default Tabs;
