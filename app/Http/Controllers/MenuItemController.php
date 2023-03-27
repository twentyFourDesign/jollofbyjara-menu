<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MenuCategory;
use App\Models\MenuItem;
use Illuminate\Support\Facades\DB;

class MenuItemController extends Controller
{
    public function menu_items()
    {
        $menuCategories = MenuCategory::where('MC_Parent','!=',0)->orderBy('MC_Title', 'ASC')->get();
         if(!empty($menuCategories) && count($menuCategories) > 0) {
             $returnData = [];
             foreach ($menuCategories as $menuCategory)
             {
                 $tempArray = [];
                 $categoryTitle = $menuCategory['MC_Title'];
                 $tempArray['title'] = $categoryTitle ;
                 $catId = $menuCategory['MC_Id'];
                 $imgPath = url("upload/mi/");
                 $query = "select
                           MI_Title as title,
                           MI_Cost as price,
                           MI_Desc as description,
                           CONCAT('$imgPath/',MI_Id,'_',MI_Img) as image,
                           MI_Qty as qty
                    from menu_item where MI_Status = 'Active' and MI_CategoryId = $catId order by MI_Title asc";

                 $menu_list = DB::select($query);
                 if(count($menu_list) >0)
                 {
                     $tempArray['data'] = $menu_list;
                 }
                 $returnData[] = $tempArray;
             }
            return response()->json([
                'data' => $returnData,
                'success' => true,
                'status' => 200,
            ], 200);
        } else {
            return response()->json([
                'data' => [],
                'success' => true,
                'status' => 200,
            ], 200);
        }
    }
}
