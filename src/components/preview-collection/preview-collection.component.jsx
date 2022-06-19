import React from "react";
import './preview-collection.styles.scss';
import CollectionItem from "../collecton-item/collecton-item.component";
const CollectionPreview = ({title,items})=>(

    <div className="collection-preview">
        <h1 className="title">{title}</h1>
          <div className="preview">
            {
                items.filter((item,inx)=>inx<4) . map(({id,...otherpops})=>(
                    <CollectionItem key={id} {...otherpops}  />
                ))
            }
          </div>
    </div>
)

export default CollectionPreview;
