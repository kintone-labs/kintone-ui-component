type LabelProps = {
    text?: string,
    textColor?: string,
    backgroundColor?: string,
    isRequired?: boolean,
    isDisabled?: boolean,
    isVisible?: boolean,
    onClick?: (e: React.SyntheticEvent<EventTarget>) => void
}