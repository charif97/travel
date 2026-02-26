import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/chat',
        destination: '/s_alfred_chat_l_exp_rience_poto',
      },
      {
        source: '/itineraire',
        destination: '/s_itin_raire_optimis_graphique_1',
      },
      {
        source: '/tribu',
        destination: '/s_drafttrip_shared_planning',
      },
      {
        source: '/profil',
        destination: '/s_profil_et_dashboard_conomies',
      },
      {
        source: '/vault',
        destination: '/s_billets_de_la_tribu_vault',
      }
    ];
  },
};

export default nextConfig;
