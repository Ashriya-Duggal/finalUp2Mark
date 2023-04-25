// import express from "express";
// const router = express.Router();
// // const Record = require('../models/record');

// // Define the API endpoint for deleting records
// router.delete('/delete/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await Record.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: 'Record not found!' });
//     }
//     res.status(200).json({ message: 'Record deleted successfully!' });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to delete record!' });
//   }
// });

// export default router;