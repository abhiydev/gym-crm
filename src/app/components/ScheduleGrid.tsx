export default function ScheduleGrid() {
    return (
      <div className="relative">
        {/* Desktop Version */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full border-collapse table-auto text-white rounded-lg shadow-lg">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 border border-gray-700 text-left">Time</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Mon</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Tue</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Wed</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Thu</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Fri</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Sat</th>
                <th className="px-4 py-2 border border-gray-700 text-left">Sun</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              {/* 8:00 AM Row */}
              <tr className="hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2 border border-gray-700">8:00 AM</td>
                <td className="px-4 py-2 border border-gray-700">Open Gym</td>
                <td className="px-4 py-2 border border-gray-700">Cardio</td>
                <td className="px-4 py-2 border border-gray-700">Cardio</td>
                <td className="px-4 py-2 border border-gray-700">CrossFit</td>
                <td className="px-4 py-2 border border-gray-700">Stretching</td>
                <td className="px-4 py-2 border border-gray-700">Powerlifting</td>
                <td className="px-4 py-2 border border-gray-700"></td>
              </tr>
  
              {/* 9:00 AM Row */}
              <tr className="hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2 border border-gray-700">9:00 AM</td>
                <td className="px-4 py-2 border border-gray-700">Open Gym</td>
                <td className="px-4 py-2 border border-gray-700">Cardio</td>
                <td className="px-4 py-2 border border-gray-700">CrossFit</td>
                <td className="px-4 py-2 border border-gray-700">CrossFit</td>
                <td className="px-4 py-2 border border-gray-700">Powerlifting</td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
              </tr>
  
              {/* 10:00 AM Row */}
              <tr className="hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2 border border-gray-700">10:00 AM</td>
                <td className="px-4 py-2 border border-gray-700">Cardio</td>
                <td className="px-4 py-2 border border-gray-700">CrossFit</td>
                <td className="px-4 py-2 border border-gray-700">Powerlifting</td>
                <td className="px-4 py-2 border border-gray-700">Open Gym</td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
                <td className="px-4 py-2 border border-gray-700"></td>
              </tr>
  
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Mobile Version */}
        <div className="block lg:hidden max-w-[90%] gap-2">
          <div className="flex text-white bg-gray-800 rounded-lg shadow-lg p-4">
            {/* 8:00 AM Row */}
            <div className="border border-gray-700 p-4 mb-2 rounded-lg transition-transform transform hover:scale-105">
              <div className="font-bold text-lg">8:00 AM</div>
              <div className="text-sm">Mon: Open Gym</div>
              <div className="text-sm">Tue: Cardio</div>
              <div className="text-sm">Wed: Cardio</div>
              <div className="text-sm">Thu: CrossFit</div>
              <div className="text-sm">Fri: Stretching</div>
              <div className="text-sm">Sat: Powerlifting</div>
              <div className="text-sm">Sun: -</div>
            </div>
  
            {/* 9:00 AM Row */}
            <div className="border border-gray-700 p-4 mb-2 rounded-lg transition-transform transform hover:scale-105">
              <div className="font-bold text-lg">9:00 AM</div>
              <div className="text-sm">Mon: Open Gym</div>
              <div className="text-sm">Tue: Cardio</div>
              <div className="text-sm">Wed: CrossFit</div>
              <div className="text-sm">Thu: CrossFit</div>
              <div className="text-sm">Fri: Powerlifting</div>
              <div className="text-sm">Sat: -</div>
              <div className="text-sm">Sun: -</div>
            </div>
  
            {/* 10:00 AM Row */}
            <div className="border border-gray-700 p-4 mb-2 rounded-lg transition-transform transform hover:scale-105">
              <div className="font-bold text-lg">10:00 AM</div>
              <div className="text-sm">Mon: Cardio</div>
              <div className="text-sm">Tue: CrossFit</div>
              <div className="text-sm">Wed: Powerlifting</div>
              <div className="text-sm">Thu: Open Gym</div>
              <div className="text-sm">Fri: -</div>
              <div className="text-sm">Sat: -</div>
              <div className="text-sm">Sun: -</div>
            </div>
  
            {/* Add more rows as needed */}
          </div>
        </div>
      </div>
    );
  }