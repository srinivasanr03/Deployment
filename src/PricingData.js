// PrcingData.js

const priceTableData = [
    {
      planType: {
        bold: "Free",
        description: "Pay-As-You-Go",
      },
      pricing: {
        originalPrice: "₹0.00",
        discount: "SAVE 0%",
        discountedPrice: "₹0",
        pricePerMonth: "/mo",
      },
      buttonLabel: "Choose Free",
      addons: [
        { text: "1 opportunity listing with limited visiblity", support: "supported" },
        { text: "Custom Branding", support: "supported" },
        { text: "On-demand Download", support: "notSupported" },
        { text: "Organic outreach", support: "supported" },
        { text: "Support - Email" , support: "supported"},
       
      ],
    },

    {
      planType: {
        bold: "Bronze",
        description: "For in-frequent hiring needs",
      },
      pricing: {
        originalPrice: "₹15,999",
        discount: "SAVE 50%",
        discountedPrice: "₹7,999",
        pricePerMonth: "/yr",
      },
      buttonLabel: "Subscribe Bronze",
      addons: [
        { text: "5 opportunity listing with unlimited visiblity", support: "supported" },
        { text: "Custom Branding", support: "supported" },
        { text: "On-demand Download", support: "supported" },
        { text: "Organic outreach", support: "supported" },
        { text: "Support - Priority Email support" , support: "supported"},
        
      ],
    },
    
    {
      planType: {
        bold: "Silver",
        description: "For frequent hiring needs",
      },
      pricing: {
        originalPrice: "₹29,999",
        discount: "SAVE 50%",
        discountedPrice: "₹14,999",
        pricePerMonth: "/yr",
      },
      buttonLabel: "Subscribe Silver",
      addons: [
        { text: "12 opportunities listings with unlimited visibility", support: "supported" },
        { text: "Custom Branding", support: "supported" },
        { text: "On-demand Download", support: "supported" },
        { text: "Organic outreach", support: "supported" },
        { text: "Support - Phone + Email" , support: "supported"},

       
      ],
    },



    {
        planType: {
          bold: "Gold",
          description: "Packages for large scale needs",
        },
        pricing: {
          originalPrice: "₹55,999",
          discount: "SAVE 50%",
          discountedPrice: "₹27,999",
          pricePerMonth: "/yr",
        },
        buttonLabel: "Subscribe Gold",
        addons: [
          { text: "25 opportunities listings with unlimited visibility", support: "supported" },
          { text: "Custom Branding", support: "supported" },
          { text: "On-demand Download", support: "supported" },
          { text: "Organic + Promotional outreach ", support: "supported" },
          { text: "Support - Phone + Email + Dedicated Manager" , support: "supported"},
      
        ],
      },

      
    // Add more priceTableData objects here as needed
  ];
  
  export default priceTableData;
  