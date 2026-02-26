import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export default function AllScreensIndex() {
  const screens = [
  {
    "name": "alertes_voyage_temps_r_el",
    "route": "s_alertes_voyage_temps_r_el"
  },
  {
    "name": "alfred_chat_l_exp_rience_poto",
    "route": "s_alfred_chat_l_exp_rience_poto"
  },
  {
    "name": "alfred_control_center_admin",
    "route": "s_alfred_control_center_admin"
  },
  {
    "name": "alfred_landing_page_liquid_glass",
    "route": "s_alfred_landing_page_liquid_glass"
  },
  {
    "name": "billets_de_la_tribu_vault",
    "route": "s_billets_de_la_tribu_vault"
  },
  {
    "name": "budget_live_de_la_tribu_2",
    "route": "s_budget_live_de_la_tribu_2"
  },
  {
    "name": "c_l_bration_confirmation_voyage",
    "route": "s_c_l_bration_confirmation_voyage"
  },
  {
    "name": "carte_safe_matchmaker_solo",
    "route": "s_carte_safe_matchmaker_solo"
  },
  {
    "name": "configuration_style_de_voyage_1",
    "route": "s_configuration_style_de_voyage_1"
  },
  {
    "name": "configuration_style_de_voyage_2",
    "route": "s_configuration_style_de_voyage_2"
  },
  {
    "name": "confirmation_de_groupe_alfred_v2",
    "route": "s_confirmation_de_groupe_alfred_v2"
  },
  {
    "name": "confirmation_r_servation_tribu",
    "route": "s_confirmation_r_servation_tribu"
  },
  {
    "name": "convertisseur_devises_alfred_offline",
    "route": "s_convertisseur_devises_alfred_offline"
  },
  {
    "name": "cortex_translate_ia_cam_ra",
    "route": "s_cortex_translate_ia_cam_ra"
  },
  {
    "name": "d_tails_itin_raire_sur_carte_2",
    "route": "s_d_tails_itin_raire_sur_carte_2"
  },
  {
    "name": "drafttrip_shared_planning",
    "route": "s_drafttrip_shared_planning"
  },
  {
    "name": "itin_raire_optimis_graphique_1",
    "route": "s_itin_raire_optimis_graphique_1"
  },
  {
    "name": "itin_raire_optimis_graphique_3",
    "route": "s_itin_raire_optimis_graphique_3"
  },
  {
    "name": "itin_raire_optimis_graphique_4",
    "route": "s_itin_raire_optimis_graphique_4"
  },
  {
    "name": "journal_de_bord_insights_solo",
    "route": "s_journal_de_bord_insights_solo"
  },
  {
    "name": "lexique_de_survie_offline_1",
    "route": "s_lexique_de_survie_offline_1"
  },
  {
    "name": "lexique_de_survie_offline_v2_2",
    "route": "s_lexique_de_survie_offline_v2_2"
  },
  {
    "name": "mood_tracker_bien_tre_alfred",
    "route": "s_mood_tracker_bien_tre_alfred"
  },
  {
    "name": "notifications_proactives_alfred",
    "route": "s_notifications_proactives_alfred"
  },
  {
    "name": "profil_et_dashboard_conomies",
    "route": "s_profil_et_dashboard_conomies"
  },
  {
    "name": "r_partition_des_frais_split_bill",
    "route": "s_r_partition_des_frais_split_bill"
  },
  {
    "name": "recherche_carte_interactive",
    "route": "s_recherche_carte_interactive"
  },
  {
    "name": "recommandations_activit_s_tribu",
    "route": "s_recommandations_activit_s_tribu"
  },
  {
    "name": "s_curit_urgences_alfred_1",
    "route": "s_s_curit_urgences_alfred_1"
  },
  {
    "name": "s_curit_urgences_alfred_2",
    "route": "s_s_curit_urgences_alfred_2"
  },
  {
    "name": "scan_cortex_vision_ia",
    "route": "s_scan_cortex_vision_ia"
  },
  {
    "name": "synchronisation_de_la_tribu_premium",
    "route": "s_synchronisation_de_la_tribu_premium"
  },
  {
    "name": "tableau_de_bord_principal_home_2",
    "route": "s_tableau_de_bord_principal_home_2"
  }
];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50 overflow-y-auto w-full max-w-[430px]">
      <div className="bg-[#1152d4] px-6 pt-12 pb-6 text-white sticky top-0 z-10 shadow-md">
        <h1 className="text-2xl font-bold flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" />
            Tous Les Écrans
        </h1>
        <p className="text-white/80 mt-2 text-sm">{screens.length} écrans importés depuis Stitch</p>
      </div>
      
      <div className="p-4 grid grid-cols-1 gap-3 pb-10">
        {screens.map((screen) => (
          <Link 
            key={screen.route} 
            href={`/${screen.route}`}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow group"
          >
            <span className="font-medium text-gray-800 text-sm truncate pr-4 group-hover:text-[#1152d4]">
                {screen.name.replace(/_/g, ' ')}
            </span>
            <span className="text-gray-300 group-hover:text-[#1152d4]">➔</span>
          </Link>
        ))}
        
        <Link href="/" className="mt-6 text-center text-[#1152d4] hover:underline text-sm font-bold">
            Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}