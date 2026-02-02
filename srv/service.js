const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    // // 1. Entities ko destructure karein taaki hum unhe refer kar sakein
    // const { Orders, OrderItems } = this.entities;

    // /**
    //  * LOGIC 1: Validation (Gatekeeper)
    //  * Jab bhi koi naya 'Order' create ho raha ho...
    //  */
    // this.before('CREATE', 'Orders', async (req) => {
    //     const orderData = req.data;

    //     // Rule: Customer ka naam hona zaroori hai
    //     if (!orderData.customer) {
    //         // Brutal stop. 400 Bad Request phenkega.
    //         req.error(400, "Bhai, Customer ka naam kaun daalega?");
    //     }

    //     // Rule: Customer ka naam bahut chhota nahi hona chahiye
    //     if (orderData.customer && orderData.customer.length < 3) {
    //         req.error(400, "Itna chhota naam? Valid naam likho.");
    //     }
    // });

    // /**
    //  * LOGIC 2: Transformation (Sanitization)
    //  * Jab bhi 'OrderItems' create ya update hon...
    //  * Note: Deep Insert mein bhi CAP items ke liye yeh trigger karega.
    //  */
    // this.before(['CREATE', 'UPDATE'], 'OrderItems', async (req) => {
    //     const itemData = req.data;

    //     // Aapke typo 'prodcut' ko handle kar rahe hain.
    //     // Agar user ne lowercase mein bheja, toh hum usse UPPERCASE kar denge.
    //     if (itemData.prodcut) {
    //         itemData.prodcut = itemData.prodcut.toUpperCase();
    //     }
        
    //     // Logical Check: Kya product ka naam empty hai?
    //     if (!itemData.prodcut) {
    //          req.error(400, "Item bina product name ke nahi bikega.");
    //     }
    // });

    // /**
    //  * LOGIC 3: Post-Processing (After Save)
    //  * Data save hone ke baad kuch log karna ya modify karna.
    //  */
    // this.after('READ', 'Orders', (eachOrder) => {
    //     // Maan lo humein UI pe dikhana hai ki Order "VIP" hai ya "Normal"
    //     // Yeh database mein save nahi hoga, bas read karte waqt dikhega.
    //     if (eachOrder.customer === 'Rahul Sharma') {
    //         eachOrder.customer += ' (VIP Client)';
    //     }
    // });
});