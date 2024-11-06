import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const LeaderboardsPreview =()=> {
  const leaderboardData = [
    { rank: 1, player: "Player1", score: 10000, prize: "$500" },
    { rank: 2, player: "Player2", score: 9500, prize: "$300" },
    { rank: 3, player: "Player3", score: 9000, prize: "$200" },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Current Leaderboard</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="text-right">Prize</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry) => (
              <TableRow key={entry.rank}>
                <TableCell className="font-medium">{entry.rank}</TableCell>
                <TableCell>{entry.player}</TableCell>
                <TableCell>{entry.score}</TableCell>
                <TableCell className="text-right">{entry.prize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export {LeaderboardsPreview}