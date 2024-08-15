"use server"

import { redirect } from "next/navigation"
import { Products, Users } from "./models"
import { connectToDB } from "./utils"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { signIn } from 'next-auth/react';

export const addUser = async (formData) => {
    
    const {username,email,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);
    try{
        connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser =  new Users({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive
        })

        await newUser.save();
    }catch(err){
        console.log(err);
        throw new Error("Failed to create User")
    }

    redirect("/dashboard/users")
}

export const addProduct = async(formData) => {
    const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try{
        connectToDB();

        const newProduct = new Products({
            title,
            desc,
            price,
            stock,
            color,
            size
        });

        await newProduct.save();
    } catch(err){
        console.log(err)
        throw new Error("Failed to create Product")
    }
    redirect("/dashboard/products")
}

export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try{
        connectToDB();
        await Users.findByIdAndDelete(id);
    }catch(err){
        console.log("Failed to delete");
    }

    revalidatePath("/dashboard/users")
}

export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try{
        connectToDB();
        await Products.findByIdAndDelete(id);
    }catch(err){
        console.log("Failed to delete");
    }

    revalidatePath("/dashboard/products")
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Users.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };



export const updateProduct = async (formData) => {
    const {id,title,desc,price,stock,color,size} =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || updateFields[key] ==undefined) && delete updateFields[key]
      );
  
      await Products.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };


 


