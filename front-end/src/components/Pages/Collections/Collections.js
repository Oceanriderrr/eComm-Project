import Collection from '../../Collections/Collection'
import Collectionz from '../../Collections/Collections'

function Collections(props) {
    const posts = [
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
      {
        collectionName: "Hacker Tech",
        collectionDescription:"test description 1",
        relatedProducts:[]
      },
    
    ]
          const loadPosts = posts.map((post,index)=>{
            return( <Collection key={index} collectionName = {post.collectionName} collectionDescription = {post.collectionDescription} relatedProducts = {post.relatedProducts} />)
          })
    
        return(
    <div className="pageContent">
    
    <Collectionz>
    
    {loadPosts}
    </Collectionz>
    
    
    </div>
    
    
      
        );
      }
      

    export default Collections;