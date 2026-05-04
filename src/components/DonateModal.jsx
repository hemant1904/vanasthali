import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Box } from '@mui/material';
import { X, Landmark, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const DonateModal = ({ open, handleClose }) => {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: "Vanasthali Rural Development Centre",
    bankName: "State Bank of India",
    accountNumber: "12345678901",
    ifscCode: "SBIN0001234",
    branch: "Model Colony, Pune",
    accountType: "Savings Account"
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          padding: '8px'
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Landmark className="text-green-700" size={24} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#1b5e20' }}>
            Support Our Mission
          </Typography>
        </Box>
        <IconButton onClick={handleClose} size="small">
          <X size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Your contribution helps us reach more children and empower more women in rural Maharashtra. Thank you for your kindness!
        </Typography>

        <Box sx={{ bgcolor: '#f1f8e9', p: 3, borderRadius: '12px', border: '1px solid #c8e6c9' }}>
          <Typography variant="subtitle2" sx={{ color: '#2e7d32', fontWeight: 600, mb: 2, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Bank Account Details
          </Typography>
          
          <div className="space-y-4">
            {[
              { label: 'Account Name', value: bankDetails.accountName },
              { label: 'Bank Name', value: bankDetails.bankName },
              { label: 'Account Number', value: bankDetails.accountNumber },
              { label: 'IFSC Code', value: bankDetails.ifscCode },
              { label: 'Branch', value: bankDetails.branch }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center group">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                </div>
                <button 
                  onClick={() => handleCopy(item.value)}
                  className="p-2 hover:bg-green-100 rounded-full transition-colors text-green-700 opacity-0 group-hover:opacity-100"
                  title="Copy to clipboard"
                >
                  <Copy size={16} />
                </button>
              </div>
            ))}
          </div>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            * All donations are tax-exempt under Section 80G of the Income Tax Act.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button 
          fullWidth 
          variant="contained" 
          onClick={handleClose}
          sx={{ 
            bgcolor: '#2e7d32', 
            '&:hover': { bgcolor: '#1b5e20' },
            py: 1.5,
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          {copied ? 'Copied to Clipboard!' : 'Close'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DonateModal;
