import { gql } from "@shopify/hydrogen";

const MENU_QUERY = gql`
    query Menu {
        menu(handle: "main-menu") {
            items {
                id
                title
                url
            }
        }
    }
`;

export default MENU_QUERY;
