import React from 'react';

// PROP TYPE DEF
interface Props {
    type: string;
    fill?: string;
    className?: string;
}

// COMPONENTS
const CustomIcon: React.FC<Props> = ({type, fill, className}): JSX.Element => {
    switch (type) {
        case 'logo':
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M23.8421 20.4473L15.8684 25.0526L8.02628 20.5263V11.4737L9.15786 10.8158C9.57891 11.2368 10.1842 11.5 10.8421 11.5C12.1579 11.5 13.2368 10.421 13.2368 9.10525C13.2368 7.78946 12.1579 6.71051 10.8421 6.71051C9.52628 6.71051 8.44733 7.78946 8.44733 9.10525C8.44733 9.31577 8.47365 9.5263 8.52628 9.71051L6.76312 10.7368V21.2631L15.8684 26.5263L25.1052 21.1842L23.8421 20.4473ZM10.8158 7.76314C11.5526 7.76314 12.1579 8.36841 12.1579 9.10525C12.1579 9.84209 11.5526 10.4474 10.8158 10.4474C10.0789 10.4474 9.47365 9.84209 9.47365 9.10525C9.47365 8.36841 10.0789 7.76314 10.8158 7.76314Z"
                        fill="white"
                    />
                    <path
                        d="M15.8421 6.94738L23.5264 11.3947L24.8421 10.6842L15.8421 5.47369L13.3948 6.86843C13.6842 7.18422 13.8948 7.57896 14.0264 7.97369L15.8421 6.94738Z"
                        fill="white"
                    />
                    <path
                        d="M19.1316 17.5789L15.8421 19.5L12.8421 17.7368V14.2631L15.8421 12.5L18.579 14.0789L19.8421 13.3947L15.8421 11.1053L11.6053 13.5526V18.4474L15.8421 20.8947L20.3421 18.3158L19.1316 17.5789Z"
                        fill="#ADD136"
                    />
                    <path
                        d="M29.7105 8L15.8421 0L2 8L3.28947 8.73684L15.8684 1.47369L27.1842 8L25.1842 9.18421L26.3421 9.8421L28.421 8.71053H28.4474V23.2368L26.8421 24.1579C26.421 23.7105 25.8158 23.4474 25.1579 23.4474C23.8421 23.4474 22.7632 24.5263 22.7632 25.8421C22.7632 27.1579 23.8421 28.2368 25.1579 28.2368C26.4737 28.2368 27.5526 27.1579 27.5526 25.8421C27.5526 25.6316 27.5263 25.4474 27.4737 25.2631L29.7368 23.9474V8H29.7105ZM25.1316 27.2368C24.3947 27.2368 23.7895 26.6316 23.7895 25.8947C23.7895 25.1579 24.3947 24.5526 25.1316 24.5526C25.8684 24.5526 26.4737 25.1579 26.4737 25.8947C26.4737 26.6316 25.8684 27.2368 25.1316 27.2368Z"
                        fill="#ADD136"
                    />
                    <path
                        d="M21.921 27L15.8421 30.5263L4.52632 24L6.55263 22.8158L5.26316 22.0789L2 24L15.8421 32L22.5526 28.1316C22.2895 27.7895 22.0789 27.4211 21.921 27Z"
                        fill="#ADD136"
                    />
                    <path
                        d="M25.1316 24.5263C25.8684 24.5263 26.4737 25.1316 26.4737 25.8684C26.4737 26.6052 25.8684 27.2105 25.1316 27.2105C24.3947 27.2105 23.7895 26.6052 23.7895 25.8684C23.7631 25.1316 24.3684 24.5263 25.1316 24.5263Z"
                        fill="#00AEEF"
                    />
                    <path
                        d="M10.8158 7.76315C11.5526 7.76315 12.1579 8.36842 12.1579 9.10526C12.1579 9.8421 11.5526 10.4474 10.8158 10.4474C10.079 10.4474 9.47369 9.8421 9.47369 9.10526C9.47369 8.36842 10.079 7.76315 10.8158 7.76315Z"
                        fill="#00AEEF"
                    />
                </svg>
            );
        case 'star':
            return (
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9413 5.19689L9 1.1121L7.0587 5.19689C6.79175 5.75859 6.2788 6.14821 5.68533 6.24006L1.36947 6.908L4.48553 10.1005C4.91403 10.5395 5.10995 11.1699 5.01012 11.7884L4.28407 16.286L8.15121 14.1742C8.68298 13.8838 9.31701 13.8838 9.84879 14.1742L13.7159 16.286L12.9899 11.7884C12.89 11.1699 13.086 10.5395 13.5145 10.1005L16.6305 6.908L12.3147 6.24006C11.7212 6.14821 11.2083 5.75859 10.9413 5.19689ZM9.82092 0.685678C9.48386 -0.0235422 8.51613 -0.0235423 8.17908 0.685678L6.23777 4.77047C6.1043 5.05132 5.84783 5.24613 5.55109 5.29205L1.23523 5.95999C0.485895 6.07597 0.18685 7.03817 0.727876 7.59246L3.84394 10.7849C4.05819 11.0044 4.15615 11.3196 4.10623 11.6289L3.38019 16.1265C3.25413 16.9074 4.03704 17.502 4.70847 17.1354L8.5756 15.0237C8.84149 14.8785 9.15851 14.8785 9.42439 15.0237L13.2915 17.1354C13.963 17.502 14.7459 16.9074 14.6198 16.1265L13.8938 11.6289C13.8438 11.3196 13.9418 11.0044 14.1561 10.7849L17.2721 7.59246C17.8131 7.03817 17.5141 6.07597 16.7648 5.95999L12.4489 5.29205C12.1522 5.24613 11.8957 5.05132 11.7622 4.77047L9.82092 0.685678Z"
                        fill={fill ? fill : '#9AC802'}
                    />
                </svg>
            );
        case 'search':
            return (
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 7.125C1.5 4.0184 4.0184 1.5 7.125 1.5C10.2316 1.5 12.75 4.0184 12.75 7.125C12.75 10.2316 10.2316 12.75 7.125 12.75C4.0184 12.75 1.5 10.2316 1.5 7.125ZM7.125 0.5C3.46611 0.5 0.5 3.46611 0.5 7.125C0.5 10.7839 3.46611 13.75 7.125 13.75C8.77447 13.75 10.2831 13.1472 11.4427 12.1499L14.6464 15.3536C14.8417 15.5488 15.1583 15.5488 15.3536 15.3536C15.5488 15.1583 15.5488 14.8417 15.3536 14.6464L12.1499 11.4427C13.1472 10.2831 13.75 8.77447 13.75 7.125C13.75 3.46611 10.7839 0.5 7.125 0.5Z"
                        fill="white"
                    />
                </svg>
            );
        case 'graduate':
            return (
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1263 8.5C11.9536 8.87399 11.5638 9.13484 11.1106 9.13484C10.4972 9.13484 10 8.65694 10 8.06742C10 7.4779 10.4972 7 11.1106 7C11.5071 7 11.855 7.19963 12.0515 7.5H20.5C20.7761 7.5 21 7.72386 21 8V16.5776C21.8549 16.815 22.5 17.5717 22.5 18.5C22.5 19.6262 21.5505 20.5 20.4286 20.5C19.3068 20.5 18.3572 19.6262 18.3572 18.5C18.3572 17.5207 19.0751 16.7323 20 16.5432V8.5H12.1263ZM4 10V15.4935L10.7551 19.2889C10.9072 19.3743 11.0928 19.3743 11.2449 19.2889L18 15.4935V10H19V15.7861C19 15.9668 18.9025 16.1335 18.7449 16.222L11.7347 20.1607C11.2785 20.4171 10.7215 20.4171 10.2653 20.1607L3.25508 16.222C3.09753 16.1335 3 15.9668 3 15.7861V10H4ZM20.4286 17.5C19.8147 17.5 19.3572 17.9694 19.3572 18.5C19.3572 19.0306 19.8147 19.5 20.4286 19.5C21.0425 19.5 21.5 19.0306 21.5 18.5C21.5 17.9694 21.0425 17.5 20.4286 17.5Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2005 0.912671C10.6891 0.604916 11.3109 0.604915 11.7995 0.91267L20.9369 6.66846C21.8658 7.25363 21.872 8.60576 20.9485 9.19944L11.8111 15.073C11.317 15.3906 10.683 15.3906 10.1889 15.073L1.05158 9.19944C0.128021 8.60576 0.134222 7.25363 1.06319 6.66846L10.2005 0.912671ZM11.2665 1.75879C11.1037 1.65621 10.8964 1.65621 10.7335 1.75879L1.59618 7.51458C1.28652 7.70964 1.28445 8.16035 1.59231 8.35824L10.7297 14.2318C10.8944 14.3377 11.1057 14.3377 11.2704 14.2318L20.4077 8.35824C20.7156 8.16035 20.7135 7.70964 20.4039 7.51458L11.2665 1.75879Z"
                        fill="white"
                    />
                </svg>
            );
        case 'leverage':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        d="M6.2069 9.37931H19.0345C16.9655 5.65517 14.4797 4.32001 9.51724 4C11.1724 5.24138 11.1724 6.48276 10.7586 6.89655C7.03448 4.82759 3.31034 7.72414 0 4C0.827586 8.96552 2.48276 10.2069 5.7931 11.8621C3.31034 11.8621 2.06897 12.2759 0.827586 13.931C5.7931 14.7586 6.62069 15.1724 9.10345 17.6552L11.5862 14.7586L6.2069 9.37931Z"
                        fill="#9AC802"
                    />
                    <path d="M11.5862 10.6207H9.10345L13.2414 14.7586L9.10345 19.7241H11.5862L15.7241 14.7586L11.5862 10.6207Z" fill="#9AC802" />
                    <path d="M15.7241 10.6207H13.2413L17.3792 14.7586L13.2413 19.7242H15.7241L19.862 14.7586L15.7241 10.6207Z" fill="#9AC802" />
                    <path d="M19.862 10.6207H17.3792L21.5172 14.7586L17.3792 19.7242H19.862L23.9999 14.7586L19.862 10.6207Z" fill="#9AC802" />
                </svg>
            );
        case 'trades':
            return (
                <svg width="25" height="25" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.00331 0.500011C6.24429 0.501606 6.44985 0.674869 6.49221 0.912105L8.57769 12.5908L10.6478 4.17469C10.7021 3.95395 10.8985 3.79762 11.1258 3.79418C11.3531 3.79073 11.5541 3.94104 11.615 4.16003L13.0798 9.42216L13.8676 7.40624C13.9426 7.21446 14.1274 7.08824 14.3333 7.08824H17C17.2761 7.08824 17.5 7.31209 17.5 7.58824C17.5 7.86438 17.2761 8.08824 17 8.08824H14.6748L13.4657 11.182C13.3874 11.3824 13.1896 11.5102 12.9747 11.4994C12.7599 11.4885 12.576 11.3414 12.5183 11.1341L11.1632 6.26598L8.98553 15.1194C8.92912 15.3488 8.71993 15.5074 8.48388 15.4997C8.24784 15.4921 8.0493 15.3204 8.00779 15.0879L5.98185 3.74265L5.22434 7.68264C5.17908 7.91807 4.97308 8.08824 4.73333 8.08824H1C0.723858 8.08824 0.5 7.86438 0.5 7.58824C0.5 7.31209 0.723858 7.08824 1 7.08824H4.32031L5.50899 0.905598C5.55449 0.668944 5.76233 0.498416 6.00331 0.500011Z"
                        fill="#9AC802"
                    />
                </svg>
            );
        case 'history':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4777 0.852592C17.4448 0.745493 17.3758 0.64878 17.2749 0.582354C17.1554 0.503693 17.0145 0.482938 16.8855 0.513277C16.8499 0.521644 16.8152 0.533896 16.782 0.54989L10.2905 3.54602C10.0397 3.66174 9.9303 3.95881 10.046 4.20953C10.1617 4.46026 10.4588 4.5697 10.7095 4.45398L15.6194 2.18785L8.62606 12.8121L5.17019 10.3329C5.05767 10.2521 4.91671 10.2217 4.78091 10.2488C4.64511 10.2759 4.52662 10.3581 4.45369 10.4758L0.574906 16.7367C0.429475 16.9714 0.501878 17.2796 0.736622 17.425C0.971365 17.5705 1.27956 17.4981 1.42499 17.2633L5.02201 11.4573L8.46607 13.928C8.57665 14.0073 8.71478 14.0382 8.8486 14.0134C8.98241 13.9886 9.10034 13.9103 9.17516 13.7966L16.5 2.66895V8C16.5 8.27614 16.7238 8.5 17 8.5C17.2761 8.5 17.5 8.27614 17.5 8V1.00734V1C17.5 0.982006 17.499 0.964141 17.4971 0.946472"
                        fill="#9AC802"
                    />
                </svg>
            );
        case 'wallet':
            return (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H17C17.2761 0.5 17.5 0.723858 17.5 1V13C17.5 13.2761 17.2761 13.5 17 13.5H1C0.723858 13.5 0.5 13.2761 0.5 13V1ZM1.5 1.5V12.5H16.5V1.5H1.5Z"
                        fill="#9AC802"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 7C10.5 5.61929 11.6193 4.5 13 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5V9C17.5 9.27614 17.2761 9.5 17 9.5H13C11.6193 9.5 10.5 8.38071 10.5 7ZM13 5.5C12.1716 5.5 11.5 6.17157 11.5 7C11.5 7.82843 12.1716 8.5 13 8.5H16.5V5.5H13Z"
                        fill="#9AC802"
                    />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 7.5H13V6.5H14V7.5Z" fill="#9AC802" />
                </svg>
            );
        case 'chevRight':
            return (
                <svg width="10" height="12" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.882257 8L0 6.65456L3.29099 4L0 1.34545L0.882257 4.76837e-07L5.84127 4L0.882257 8Z"
                        fill="#9AC802"
                    />
                </svg>
            );

        default:
            return <></>;
    }
};

export default CustomIcon;
