export default{
    dialect:'postgresql',
    schema:'./src/utils/schema.jsx',
    out:'./drizzle',
    dbCredentials:{
        url:'postgresql://breastcancer_owner:SluDX3JjTAE5@ep-green-tree-a5cpmbgr.us-east-2.aws.neon.tech/breast_cancer?sslmode=require', 
        connectionString:'postgresql://breastcancer_owner:SluDX3JjTAE5@ep-green-tree-a5cpmbgr.us-east-2.aws.neon.tech/breast_cancer?sslmode=require'
    }
}