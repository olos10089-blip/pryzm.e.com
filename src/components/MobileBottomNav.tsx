import React, { useState } from 'react';
import { 
  ShoppingBag, Sliders, Award, Compass, Home, 
  Headphones, Package, Globe, Shield, User, Sparkles, X, ChevronRight, KeyRound
} from 'lucide-react';
import { CountryInfo, RegisteredUser } from '../types';

interface MobileBottomNavProps {
  cartCount: number;
  totalWeightKg: number;
  vipPointsBalance: number;
  country: CountryInfo;
  currentUser?: RegisteredUser | null;
  onOpenCart: () => void;
  onOpenVIP: () => void;
  onOpenTracker: () => void;
  onOpenSupport: () => void;
  onOpenWorldModal: () => void;
  onOpenSignUp: () => void;
  onOpenAdmin: () => void;
  onExploreCollection: () => void;
  onOpenConfigurator: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  totalWeightKg,
  vipPointsBalance,
  country,
  currentUser,
  onOpenCart,
  onOpenVIP,
  onOpenTracker,
  onOpenSupport,
  onOpenWorldModal,
  onOpenSignUp,
  onOpenAdmin,
  onExploreCollection,
  onOpenConfigurator
}) => {
  const [isHubOpen, setIsHubOpen] = useState<boolean>(false);

  const handleAction = (action: () => void) => {
    setIsHubOpen(false);
    action();
  };

  return (
    <>
      {/* Mobile Hub Drawer (When user taps "Hub / Menu") */}
      {isHubOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end md:hidden animate-in fade-in"
          onClick={() => setIsHubOpen(false)}
        >
          <div 
            className="w-full bg-[#15161b] border-t border-neutral-800 rounded-t-2xl p-5 pb-safe max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Drag Pill */}
            <div className="w-12 h-1 bg-neutral-700 rounded-full mx-auto mb-2" />

            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="font-serif-brand text-lg font-bold text-white tracking-widest">
                  PRYZM
                </span>
                <span className="text-[10px] font-mono-spec uppercase text-[#c5a880] bg-[#c5a880]/15 px-2 py-0.5 rounded border border-[#c5a880]/30">
                  Mobile Hub
                </span>
              </div>
              <button 
                onClick={() => setIsHubOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-800/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User status / Registration quick banner */}
            <div className="p-3.5 bg-[#191a20] border border-neutral-800 rounded-xl flex items-center justify-between">
              {currentUser ? (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {currentUser.fullName || currentUser.email.split('@')[0]}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono-spec">
                      Verified Patron · {vipPointsBalance} VIP Pts
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>Join VIP Architects Guild</span>
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      Receive +250 welcome points instantly
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAction(onOpenSignUp)}
                    className="px-3 py-1.5 bg-[#c5a880] text-black font-semibold text-[11px] rounded uppercase tracking-wider"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Quick Navigation Grid */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <button
                type="button"
                onClick={() => handleAction(onOpenTracker)}
                className="p-3.5 bg-[#18191e] border border-neutral-800 hover:border-neutral-700 rounded-xl text-left flex flex-col justify-between h-22 transition-colors"
              >
                <Package className="w-5 h-5 text-[#c5a880]" />
                <div>
                  <span className="font-semibold text-white block">Track Order</span>
                  <span className="text-[10px] text-neutral-400">Doorstep & Curing status</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleAction(onOpenSupport)}
                className="p-3.5 bg-[#18191e] border border-neutral-800 hover:border-neutral-700 rounded-xl text-left flex flex-col justify-between h-22 transition-colors"
              >
                <Headphones className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="font-semibold text-white block">Support & AI</span>
                  <span className="text-[10px] text-neutral-400">Chat, AI, Call Request</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleAction(onOpenWorldModal)}
                className="p-3.5 bg-[#18191e] border border-neutral-800 hover:border-neutral-700 rounded-xl text-left flex flex-col justify-between h-22 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Globe className="w-5 h-5 text-sky-400" />
                  <span className="text-base">{country.flag}</span>
                </div>
                <div>
                  <span className="font-semibold text-white block truncate">{country.name}</span>
                  <span className="text-[10px] text-[#c5a880] font-mono-spec">{country.currency} ({country.symbol})</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleAction(onOpenVIP)}
                className="p-3.5 bg-[#18191e] border border-neutral-800 hover:border-neutral-700 rounded-xl text-left flex flex-col justify-between h-22 transition-colors"
              >
                <Award className="w-5 h-5 text-[#c5a880]" />
                <div>
                  <span className="font-semibold text-white block">VIP Rewards</span>
                  <span className="text-[10px] text-amber-400 font-mono-spec">{vipPointsBalance} Pts Available</span>
                </div>
              </button>
            </div>

            {/* COD Transparency badge */}
            <div className="p-3 bg-[#111215] border border-neutral-800/80 rounded-lg flex items-center gap-2.5 text-[11px] text-neutral-400">
              <Shield className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
              <span>Strict Cash on Delivery (COD) · Inspect before physical cash settlement.</span>
            </div>

            {/* Admin console link */}
            <div className="pt-1 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => handleAction(onOpenAdmin)}
                className="text-neutral-500 hover:text-neutral-300 flex items-center gap-1.5 py-1 text-[11px] font-mono-spec"
              >
                <KeyRound className="w-3.5 h-3.5 text-neutral-500" />
                <span>Foundry Director Console (Passcode: PRYZM2026)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar on Mobile */}
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121316]/95 backdrop-blur-xl border-t border-neutral-800/90 px-2 py-1.5 flex items-center justify-around shadow-[0_-8px_24px_rgba(0,0,0,0.6)]"
      >
        {/* Tab 1: Collection */}
        <button
          type="button"
          onClick={onExploreCollection}
          className="flex flex-col items-center justify-center py-1 px-2.5 min-w-[56px] text-neutral-400 hover:text-white active:scale-95 transition-all"
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide">Gallery</span>
        </button>

        {/* Tab 2: Bespoke Studio */}
        <button
          type="button"
          onClick={onOpenConfigurator}
          className="flex flex-col items-center justify-center py-1 px-2.5 min-w-[56px] text-neutral-400 hover:text-[#c5a880] active:scale-95 transition-all"
        >
          <Sliders className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide">Bespoke</span>
        </button>

        {/* Tab 3: Bag (Elevated Center Action) */}
        <button
          type="button"
          onClick={onOpenCart}
          className="relative -top-3 flex flex-col items-center justify-center active:scale-95 transition-transform"
        >
          <div className="w-13 h-13 rounded-full bg-[#c5a880] hover:bg-[#b89a70] text-black shadow-lg shadow-[#c5a880]/30 flex items-center justify-center border-2 border-[#121316]">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-[#c5a880] border border-[#c5a880] text-[10px] font-mono-spec font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] font-mono-spec text-white mt-0.5">
            {totalWeightKg > 0 ? `${totalWeightKg}kg` : 'Bag'}
          </span>
        </button>

        {/* Tab 4: VIP Club */}
        <button
          type="button"
          onClick={onOpenVIP}
          className="flex flex-col items-center justify-center py-1 px-2.5 min-w-[56px] text-neutral-400 hover:text-[#c5a880] active:scale-95 transition-all"
        >
          <Award className="w-5 h-5 mb-1 text-[#c5a880]" />
          <span className="text-[10px] font-medium tracking-wide">VIP</span>
        </button>

        {/* Tab 5: Mobile Hub / More */}
        <button
          type="button"
          onClick={() => setIsHubOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 min-w-[56px] text-neutral-400 hover:text-white active:scale-95 transition-all"
        >
          <Compass className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-wide">Hub</span>
        </button>
      </nav>
    </>
  );
};
