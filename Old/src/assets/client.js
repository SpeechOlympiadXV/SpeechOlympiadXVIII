import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: 'i32b0q2c',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-03-25"
});