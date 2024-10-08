import { updateProduct } from '@/app/lib/action';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const singleProduct = async({params}) => {
  const {id} = params;

  const product = await fetchProduct(id);
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/avatar.png" alt="" fill/>
        </div>
      {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
        <input type='hidden' name='id' value={product.id}/>
            <label>Title</label>
            <input type='text' name='title' placeholder={product.title}/>
            <label>Price</label>
            <input type='number' name='price' placeholder={product.price}/>
            <label>Stock</label>
            <input type='number' name='stock' placeholder={product.stock}/>
            <label>Color</label>
            <input type='text' name='color' placeholder={product.color}/>
            <label>Size</label>
            <input type='text' name='size' placeholder={product.size}/>
            <label>Category</label>
            <select name='category' id='category' >
            <option value='kitchen' selected={product.category}>Kitchen</option>
            <option value='computer'>Computer</option>
            </select>
            <label> Description </label>
            <textarea name='description' placeholder={product.desc} id='description'></textarea>
            <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default singleProduct
