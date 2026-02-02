import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Card,
  Table,
  Badge,
  Grid,
  Text,
  Group,
  Progress,
  Loader,
  Center,
  Paper,
  SimpleGrid,
  Box,
  ThemeIcon,
  Flex,
  Divider,
  Stack,
  Avatar,
  Button,
  ActionIcon,
} from "@mantine/core";
import { Heatmap, BarChart } from "@mantine/charts";
import { IconTrophy, IconUser, IconAward, IconChartBar, IconHeartHandshake, IconSend } from "@tabler/icons-react";
import axios from "axios";

export default function App() {
  const [top10, setTop10] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: 'rank_position', direction: 'asc' });

  useEffect(() => {
    // Mock data if API is not available
    const mockCandidates = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      name: `Candidate ${i + 1}`,
      experience: Math.floor(Math.random() * 15) + 2,
      crisis_score: parseFloat((Math.random() * 2 + 6).toFixed(2)), // Between 6-8
      sustainability_score: parseFloat((Math.random() * 2 + 6).toFixed(2)), // Between 6-8
      motivation_score: parseFloat((Math.random() * 2 + 7).toFixed(2)), // Between 7-9
      total_score: parseFloat((Math.random() * 3 + 7).toFixed(2)), // Between 7-10
    })).sort((a, b) => b.total_score - a.total_score)
     .map((c, idx) => ({ ...c, rank_position: idx + 1 }));

    const mockTop10 = mockCandidates.slice(0, 10);

    // Try to fetch from API, fallback to mock data
    Promise.all([
      axios.get("http://localhost:5000/top10").catch(() => ({ data: mockTop10 })),
      axios.get("http://localhost:5000/candidates").catch(() => ({ data: mockCandidates })),
    ]).then(([topRes, candRes]) => {
      setTop10(topRes.data);
      setCandidates(candRes.data);
      setLoading(false);
    }).catch(error => {
      console.error("Error fetching data, using mock data:", error);
      setTop10(mockTop10);
      setCandidates(mockCandidates);
      setLoading(false);
    });
  }, []);

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedTop10 = [...top10].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setTop10(sortedTop10);
  };

  const handleShareCandidate = (candidate) => {
    // Simulate sharing workflow
    alert(`Sharing candidate: ${candidate.name}\n\nSkills: Crisis-${candidate.crisis_score}, Sustainability-${candidate.sustainability_score}, Motivation-${candidate.motivation_score}`);
  };

  if (loading)
    return (
      <Box bg="#f8fafc" style={{ minHeight: "100vh" }}>
        <Center style={{ height: "100vh" }}>
          <Stack align="center">
            <Loader size="lg" color="green" />
            <Text fz="lg" c="dimmed">Loading recycling dashboard...</Text>
          </Stack>
        </Center>
      </Box>
    );

  // Calculate averages safely with NaN checks - more defensive approach
  const crisisScores = candidates?.map(c => parseFloat(c?.crisis_score)).filter(score => !isNaN(score) && isFinite(score)) || [];
  const avgCrisisScore = crisisScores.length > 0 
    ? Math.round((crisisScores.reduce((sum, score) => sum + score, 0) / crisisScores.length) * 10) 
    : 0;
    
  const sustainabilityScores = candidates?.map(c => parseFloat(c?.sustainability_score)).filter(score => !isNaN(score) && isFinite(score)) || [];
  const avgSustainabilityScore = sustainabilityScores.length > 0 
    ? Math.round((sustainabilityScores.reduce((sum, score) => sum + score, 0) / sustainabilityScores.length) * 10) 
    : 0;
    
  const motivationScores = candidates?.map(c => parseFloat(c?.motivation_score)).filter(score => !isNaN(score) && isFinite(score)) || [];
  const avgMotivationScore = motivationScores.length > 0 
    ? Math.round((motivationScores.reduce((sum, score) => sum + score, 0) / motivationScores.length) * 10) 
    : 0;

  const heatmapData = candidates && candidates.length > 0 ? candidates.slice(0, 15).map((c) => ({
    name: c.name,
    crisis: !isNaN(c.crisis_score) ? Math.round(c.crisis_score * 10) : 0,
    sustainability: !isNaN(c.sustainability_score) ? Math.round(c.sustainability_score * 10) : 0,
    motivation: !isNaN(c.motivation_score) ? Math.round(c.motivation_score * 10) : 0,
  })) : [];

  return (
    <Box bg="#f8fafc" style={{ minHeight: "100vh", paddingBottom: "2rem" }}>
      <Container size="xl" py="xl">
        {/* Header Section */}
        <Paper shadow="lg" radius="lg" p="xl" mb="xl" gradient={{ from: 'green.7', to: 'green.9', deg: 45 }}>
          <Flex justify="space-between" align="center" gap="lg" direction={{ base: 'column', md: 'row' }}>
            <Group spacing="lg">
              <ThemeIcon size="xl" radius="xl" variant="light" color="white">
                <IconHeartHandshake size={32} color="#059669" />
              </ThemeIcon>
              <div>
                <Title order={1} c="white" mb={5}>♻️ Recycling Production Manager Dashboard</Title>
                <Text c="gray.2" size="lg">Optimizing environmental impact through strategic workforce management</Text>
              </div>
            </Group>
            <Badge size="lg" color="green" variant="light" radius="md" px="xl">
              Live Data
            </Badge>
          </Flex>
        </Paper>

        {/* Stats Overview */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mb="xl">
          <Card shadow="md" radius="md" padding="lg" bg="white">
            <Group position="apart" mb="xs">
              <Text size="sm" color="dimmed">Total Candidates</Text>
              <ThemeIcon color="green" variant="light">
                <IconUser size={18} />
              </ThemeIcon>
            </Group>
            <Text size="xl" weight={700}>{candidates?.length || 0}</Text>
          </Card>
          
          <Card shadow="md" radius="md" padding="lg" bg="white">
            <Group position="apart" mb="xs">
              <Text size="sm" color="dimmed">Avg Crisis Score</Text>
              <ThemeIcon color="red" variant="light">
                <IconChartBar size={18} />
              </ThemeIcon>
            </Group>
            <Text size="xl" weight={700}>{avgCrisisScore}</Text>
          </Card>
          
          <Card shadow="md" radius="md" padding="lg" bg="white">
            <Group position="apart" mb="xs">
              <Text size="sm" color="dimmed">Avg Sustainability</Text>
              <ThemeIcon color="green" variant="light">
                <IconAward size={18} />
              </ThemeIcon>
            </Group>
            <Text size="xl" weight={700}>{avgSustainabilityScore}</Text>
          </Card>
          
          <Card shadow="md" radius="md" padding="lg" bg="white">
            <Group position="apart" mb="xs">
              <Text size="sm" color="dimmed">Avg Motivation</Text>
              <ThemeIcon color="blue" variant="light">
                <IconTrophy size={18} />
              </ThemeIcon>
            </Group>
            <Text size="xl" weight={700}>{avgMotivationScore}</Text>
          </Card>
        </SimpleGrid>

        {/* Main Content */}
        <Grid gutter="xl">
          <Grid.Col span={12}>
            {/* Leaderboard */}
            <Card shadow="md" radius="lg" p="lg" mb="xl" bg="white">
              <Group position="apart" mb="md">
                <Title order={3} c="green.8">🏆 Top 10 Candidates</Title>
                <Badge color="green" variant="outline">Live Ranking</Badge>
              </Group>
              <Table striped highlightOnHover withBorder verticalSpacing="md">
                <thead>
                  <tr>
                    <th 
                      style={{ width: '10%', cursor: 'pointer' }} 
                      onClick={() => handleSort('rank_position')}
                    >
                      Rank {sortConfig.key === 'rank_position' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                    </th>
                    <th 
                      style={{ width: '50%', cursor: 'pointer' }} 
                      onClick={() => handleSort('name')}
                    >
                      Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                    </th>
                    <th 
                      style={{ width: '20%', cursor: 'pointer' }} 
                      onClick={() => handleSort('total_score')}
                    >
                      Total Score {sortConfig.key === 'total_score' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                    </th>
                    <th style={{ width: '20%' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {top10?.map((c, i) => (
                    <tr key={i}>
                      <td>
                        <Badge 
                          color={i === 0 ? "yellow" : i === 1 ? "gray" : i === 2 ? "orange" : "green"}
                          variant="filled"
                          size="lg"
                        >
                          #{c.rank_position}
                        </Badge>
                      </td>
                      <td>
                        <Group spacing="sm">
                          <Avatar size="sm" color="green" radius="xl">
                            {c.name?.charAt(0) || '?'}
                          </Avatar>
                          <Text fw={600}>{c.name}</Text>
                        </Group>
                      </td>
                      <td>
                        <Badge color="green" size="lg" variant="light">
                          {c.total_score}
                        </Badge>
                      </td>
                      <td>
                        <ActionIcon 
                          variant="light" 
                          color="green" 
                          aria-label="Share candidate"
                          onClick={() => handleShareCandidate(c)}
                        >
                          <IconSend size={16} />
                        </ActionIcon>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Grid.Col>
        </Grid>

        <Grid gutter="xl">
          <Grid.Col span={12}>
            {/* Heatmap */}
            <Card shadow="md" radius="lg" p="lg" mb="xl" bg="white">
              <Title order={3} mb="md" c="green.8">🔥 Skill Heatmap</Title>
              <Heatmap
                data={heatmapData}
                dataKey="name"
                series={[
                  { name: "crisis", label: "Crisis", color: "red.5" },
                  { name: "sustainability", label: "Sustainability", color: "green.5" },
                  { name: "motivation", label: "Motivation", color: "blue.5" },
                ]}
                legend={{
                  position: "bottom",
                  align: "center",
                }}
                cellStyle={(theme, value) => ({
                  color: theme.white,
                  fontSize: '0.75rem',
                })}
              />
            </Card>

            {/* Quick Stats */}
            <Card shadow="md" radius="lg" p="lg" bg="white">
              <Title order={3} mb="md" c="green.8">📈 Performance Metrics</Title>
              <Stack spacing="md">
                <div>
                  <Group position="apart" mb="xs">
                    <Text size="sm">Average Experience</Text>
                    <Text size="sm" weight={700} c="green">
                      {candidates && candidates.length > 0 ? (candidates.reduce((sum, c) => sum + (c.experience || 0), 0) / candidates.length).toFixed(1) + ' yrs' : 'N/A'}
                    </Text>
                  </Group>
                  <Progress value={60} color="green" size="sm" />
                </div>
                
                <div>
                  <Group position="apart" mb="xs">
                    <Text size="sm">Skill Balance</Text>
                    <Text size="sm" weight={700} c="green">
                      {avgCrisisScore}/{avgSustainabilityScore}/{avgMotivationScore}
                    </Text>
                  </Group>
                  <Progress value={80} color="green" size="sm" />
                </div>
                
                <div>
                  <Group position="apart" mb="xs">
                    <Text size="sm">Team Cohesion</Text>
                    <Text size="sm" weight={700} c="green">
                      High
                    </Text>
                  </Group>
                  <Progress value={90} color="green" size="sm" />
                </div>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Candidate Profiles */}
        <Title order={3} mb="md" c="green.8">👤 Candidate Profiles</Title>
        <Grid gutter="md">
          {candidates?.map((c) => (
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }} key={c.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder bg="white">
                <Group position="apart" mb="md">
                  <Group spacing="sm">
                    <Avatar size="lg" color="green" radius="xl">
                      {c.name?.charAt(0) || '?'}
                    </Avatar>
                    <div>
                      <Text fw={700} size="lg">{c.name}</Text>
                      <Text size="sm" color="dimmed">{c.experience} years experience</Text>
                    </div>
                  </Group>
                  <Group spacing="xs">
                    <Badge color="green" variant="light">
                      Score: {c.total_score}
                    </Badge>
                    <Button 
                      variant="light" 
                      color="green" 
                      leftSection={<IconSend size={14} />}
                      size="compact-sm"
                      onClick={() => handleShareCandidate(c)}
                    >
                      Share
                    </Button>
                  </Group>
                </Group>

                <Divider my="sm" />

                <Stack spacing="sm">
                  <div>
                    <Group position="apart" mb="xs">
                      <Text size="sm">Crisis Management</Text>
                      <Text size="sm" weight={700} c={c.crisis_score >= 8 ? "green" : c.crisis_score >= 6 ? "orange" : "red"}>
                        {!isNaN(c.crisis_score) ? Math.round(c.crisis_score * 10) : 'No data'}
                      </Text>
                    </Group>
                    <Progress value={!isNaN(c.crisis_score) ? c.crisis_score * 10 : 0} color={c.crisis_score >= 8 ? "green" : c.crisis_score >= 6 ? "orange" : "red"} size="sm" />
                  </div>

                  <div>
                    <Group position="apart" mb="xs">
                      <Text size="sm">Sustainability</Text>
                      <Text size="sm" weight={700} c={c.sustainability_score >= 8 ? "green" : c.sustainability_score >= 6 ? "orange" : "red"}>
                        {!isNaN(c.sustainability_score) ? Math.round(c.sustainability_score * 10) : 'No data'}
                      </Text>
                    </Group>
                    <Progress value={!isNaN(c.sustainability_score) ? c.sustainability_score * 10 : 0} color={c.sustainability_score >= 8 ? "green" : c.sustainability_score >= 6 ? "orange" : "red"} size="sm" />
                  </div>

                  <div>
                    <Group position="apart" mb="xs">
                      <Text size="sm">Team Motivation</Text>
                      <Text size="sm" weight={700} c={c.motivation_score >= 8 ? "green" : c.motivation_score >= 6 ? "orange" : "red"}>
                        {!isNaN(c.motivation_score) ? Math.round(c.motivation_score * 10) : 'No data'}
                      </Text>
                    </Group>
                    <Progress value={!isNaN(c.motivation_score) ? c.motivation_score * 10 : 0} color={c.motivation_score >= 8 ? "green" : c.motivation_score >= 6 ? "orange" : "red"} size="sm" />
                  </div>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}