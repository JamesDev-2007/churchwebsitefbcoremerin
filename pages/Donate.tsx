import React, { useState } from 'react';
import { CreditCardIcon, QrCodeIcon, BanknotesIcon, CheckCircleIcon, VisaIcon, MastercardIcon, VerveIcon, ChevronLeftIcon } from '../components/icons';

type DonationType = 'one-time' | 'recurring';
type Frequency = 'weekly' | 'monthly' | 'yearly';
type PaymentMethod = 'card' | 'transfer' | 'qr';
type PageStep = 'form' | 'payment' | 'thankyou';

const presetAmounts = [1000, 5000, 10000, 25000, 50000, 100000];
const donationFunds = ['General Offering', 'Tithe', 'Building Project'];

const AnimatedCheckmark: React.FC = () => (
    <div className="w-24 h-24 mx-auto">
        <svg viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        <style>{`
            .checkmark-circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 3; stroke-miterlimit: 10; stroke: #4ade80; fill: none; animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; }
            .checkmark-check { transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; stroke-width: 4; stroke-linecap: round; stroke: #4ade80; animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards; }
            @keyframes stroke { 100% { stroke-dashoffset: 0; } }
        `}</style>
    </div>
);

const Donate: React.FC = () => {
    const [step, setStep] = useState<PageStep>('form');
    const [donationType, setDonationType] = useState<DonationType>('one-time');
    const [frequency, setFrequency] = useState<Frequency>('monthly');
    const [amount, setAmount] = useState<number | string>('');
    const [customAmount, setCustomAmount] = useState<string>('');
    const [designation, setDesignation] = useState<string>(donationFunds[0]);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    
    const handleAmountClick = (value: number) => {
        setAmount(value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        setAmount(Number(value));
    };

    const handleNextStep = () => {
        // FIX: Explicitly cast `amount` to a number to ensure type-safe comparison.
        // The `amount` state can be a string ('') initially, which causes a type error.
        if (Number(amount) > 0 && donorName && donorEmail) {
            setStep('payment');
        } else {
            alert('Please fill in an amount, your name, and email address.');
        }
    };
    
    const handleConfirmDonation = () => {
        // Here you would integrate with a real payment processor
        console.log({
            name: donorName,
            email: donorEmail,
            amount,
            type: donationType,
            frequency: donationType === 'recurring' ? frequency : null,
            designation,
            paymentMethod
        });
        setStep('thankyou');
    };

    const formatNaira = (num: number | string) => {
        if (typeof num === 'string' && num === '') return '';
        return `₦${Number(num).toLocaleString()}`;
    };

    const renderFormStep = () => (
        <>
            <h1 className="text-4xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-2">Support the Ministry – Give Today</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Your generous giving empowers us to share the love of Christ, serve our community, and maintain our church home. Every gift makes a difference.</p>

            <div className="space-y-6 text-left">
                {/* Designated Giving */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">1. Choose a Fund</label>
                    <select value={designation} onChange={e => setDesignation(e.target.value)} className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600">
                        {donationFunds.map(fund => <option key={fund} value={fund}>{fund}</option>)}
                    </select>
                </div>
                
                {/* Donation Type & Frequency */}
                <div>
                     <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">2. Select Gift Type</label>
                     <div className="grid grid-cols-2 gap-2 p-1 bg-warm-gray dark:bg-gray-700 rounded-lg">
                        <button onClick={() => setDonationType('one-time')} className={`py-2 rounded-md font-semibold ${donationType === 'one-time' ? 'bg-church-maroon text-white shadow' : ''}`}>One-time</button>
                        <button onClick={() => setDonationType('recurring')} className={`py-2 rounded-md font-semibold ${donationType === 'recurring' ? 'bg-church-maroon text-white shadow' : ''}`}>Recurring</button>
                     </div>
                     {donationType === 'recurring' && (
                        <div className="grid grid-cols-3 gap-2 p-1 mt-2 bg-warm-gray dark:bg-gray-700 rounded-lg">
                            {(['weekly', 'monthly', 'yearly'] as Frequency[]).map(freq => (
                                <button key={freq} onClick={() => setFrequency(freq)} className={`py-2 rounded-md text-sm font-semibold capitalize ${frequency === freq ? 'bg-white dark:bg-gray-600 text-church-maroon-dark dark:text-white shadow' : ''}`}>{freq}</button>
                            ))}
                        </div>
                     )}
                </div>

                {/* Amount */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">3. Enter Amount</label>
                    <div className="grid grid-cols-3 gap-3">
                        {presetAmounts.map(pAmount => (
                            <button key={pAmount} onClick={() => handleAmountClick(pAmount)} className={`py-4 rounded-lg font-bold text-lg border-2 transition-colors ${amount === pAmount ? 'bg-church-maroon text-white border-church-maroon' : 'bg-warm-gray dark:bg-gray-700 dark:border-gray-600 hover:border-church-maroon-dark'}`}>
                                {formatNaira(pAmount)}
                            </button>
                        ))}
                    </div>
                    <div className="relative mt-4">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-500">₦</span>
                        <input
                            type="text"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            placeholder="Or enter custom amount"
                            className="w-full pl-10 pr-4 py-4 text-center text-lg font-bold border-2 rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600 focus:border-church-maroon focus:ring-0"
                        />
                    </div>
                </div>
                
                {/* Personal Info */}
                 <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">4. Your Information</label>
                     <div className="space-y-3">
                        <input type="text" value={donorName} onChange={e => setDonorName(e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600" required/>
                        <input type="email" value={donorEmail} onChange={e => setDonorEmail(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg bg-warm-gray dark:bg-gray-700 dark:border-gray-600" required/>
                    </div>
                </div>


                <button onClick={handleNextStep} className="w-full bg-yellow-400 text-church-maroon-dark hover:bg-yellow-300 font-bold py-4 rounded-lg shadow-lg text-xl">Continue</button>
            </div>
        </>
    );
    
    const renderPaymentStep = () => (
         <>
            <button onClick={() => setStep('form')} className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-4">
                <ChevronLeftIcon className="w-5 h-5"/> Back
            </button>
            <h1 className="text-3xl font-bold text-church-maroon dark:text-yellow-400 font-poppins mb-2">Payment Details</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Please confirm your donation and select a payment method.</p>

             <div className="bg-warm-gray dark:bg-gray-900/50 p-4 rounded-lg mb-6 text-left space-y-2">
                <div className="flex justify-between">
                    <span className="font-semibold">Amount:</span>
                    <span className="font-bold text-lg">{formatNaira(amount)} {donationType === 'recurring' && `/ ${frequency.replace('ly', '')}`}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Fund:</span>
                    <span>{designation}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span>{donorEmail}</span>
                </div>
            </div>

            <div className="space-y-6 text-left">
                <div className="grid grid-cols-3 gap-2 p-1 bg-warm-gray dark:bg-gray-700 rounded-lg">
                    <button onClick={() => setPaymentMethod('card')} className={`flex items-center justify-center gap-2 py-2 rounded-md font-semibold ${paymentMethod === 'card' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}><CreditCardIcon className="w-5 h-5 hidden sm:inline"/> Card</button>
                    <button onClick={() => setPaymentMethod('transfer')} className={`flex items-center justify-center gap-2 py-2 rounded-md font-semibold ${paymentMethod === 'transfer' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}><BanknotesIcon className="w-5 h-5 hidden sm:inline"/> Transfer</button>
                    <button onClick={() => setPaymentMethod('qr')} className={`flex items-center justify-center gap-2 py-2 rounded-md font-semibold ${paymentMethod === 'qr' ? 'bg-white dark:bg-gray-600 shadow' : ''}`}><QrCodeIcon className="w-5 h-5 hidden sm:inline"/> QR Code</button>
                </div>

                {/* Payment method details */}
                <div className="p-4 border rounded-lg dark:border-gray-700 min-h-[200px]">
                    {paymentMethod === 'card' && (
                        <div className="space-y-3">
                             <div className="flex items-center justify-between">
                                <span className="font-semibold text-sm">Pay with Card</span>
                                <div className="flex items-center gap-2">
                                    <VisaIcon className="h-6"/>
                                    <MastercardIcon className="h-6"/>
                                    <VerveIcon className="h-6"/>
                                </div>
                            </div>
                            <input type="text" placeholder="Card Number" className="w-full px-3 py-2 border rounded bg-warm-gray dark:bg-gray-700 dark:border-gray-600"/>
                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="MM / YY" className="w-full px-3 py-2 border rounded bg-warm-gray dark:bg-gray-700 dark:border-gray-600"/>
                                <input type="text" placeholder="CVV" className="w-full px-3 py-2 border rounded bg-warm-gray dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                        </div>
                    )}
                     {paymentMethod === 'transfer' && (
                        <div className="text-sm">
                            <p className="font-semibold mb-2">Bank Transfer Details</p>
                            <p><strong>Bank Name:</strong> FIRST BANK</p>
                            <p><strong>Account Name:</strong> First Baptist Church Itire</p>
                            <p><strong>Account Number:</strong> 2013362382</p>
                            <hr className="my-3 dark:border-gray-600"/>
                             <p className="font-semibold mb-1">USSD Transfer</p>
                             <p className="font-mono bg-warm-gray dark:bg-gray-700 p-2 rounded">*737*1*Amount*0123456789#</p>
                        </div>
                    )}
                    {paymentMethod === 'qr' && (
                        <div className="text-center">
                            <p className="font-semibold mb-2">Scan to Pay</p>
                             <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" className="mx-auto rounded-lg"/>
                        </div>
                    )}
                </div>
                <button onClick={handleConfirmDonation} className="w-full bg-yellow-400 text-church-maroon-dark hover:bg-yellow-300 font-bold py-4 rounded-lg shadow-lg text-xl">Confirm Donation of {formatNaira(amount)}</button>
            </div>
        </>
    );

     const renderThankYouStep = () => (
        <div className="text-center py-8">
            <AnimatedCheckmark />
            <h1 className="text-3xl font-bold text-green-500 font-poppins mt-4">Thank You!</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Your generous donation has been received.</p>
             <div className="bg-warm-gray dark:bg-gray-900/50 p-4 rounded-lg my-6 text-left text-sm">
                <p>A receipt for your donation of <strong>{formatNaira(amount)}</strong> has been sent to <strong>{donorEmail}</strong>.</p>
                <p className="mt-1">Thank you for your partnership in the gospel.</p>
            </div>
            <button onClick={() => setStep('form')} className="w-full bg-church-maroon text-white font-bold py-3 rounded-lg shadow-md hover:bg-church-maroon-dark">Make Another Donation</button>
        </div>
    );


  return (
    <div className="bg-warm-gray dark:bg-gray-900 py-12 md:py-20 font-open-sans">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl text-center">
            {step === 'form' && renderFormStep()}
            {step === 'payment' && renderPaymentStep()}
            {step === 'thankyou' && renderThankYouStep()}
        </div>
      </div>
    </div>
  );
};

export default Donate;